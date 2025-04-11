import React, { useState, useRef, useEffect } from 'react';
import { SubTask, Resource } from '../../types/tasks';
import { TaskStatus, STATUS_CONFIG } from '../../types/status';
import { RichText } from '../RichText';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../../styles/components/SubTask.css';

interface SubTaskItemProps {
  subtask: SubTask;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onStatusChange: (status: TaskStatus) => void;
}

const StatusDropdown: React.FC<{
  currentStatus: TaskStatus;
  onStatusChange: (status: TaskStatus) => void;
  isOpen: boolean;
  onClose: () => void;
}> = ({ currentStatus, onStatusChange, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="status-dropdown">
      {(Object.entries(STATUS_CONFIG)).map(([status, config]) => {
        const { Icon, color, label } = config;
        return (
          <div
            key={status}
            className={`status-option ${status === currentStatus ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onStatusChange(status as TaskStatus);
              onClose();
            }}
          >
            <Icon size={20} color={color} />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

const ResourceItem: React.FC<{ resource: Resource }> = ({ resource }) => {
  if (resource.type === 'image') {
    return (
      <div className="resource-item">
        <div className="image-preview">
          <img 
            src={resource.thumbnail || resource.url} 
            alt={resource.alt || resource.title}
            className="resource-image"
            onClick={() => window.open(resource.url, '_blank')}
          />
          <span className="image-caption">{resource.title}</span>
          {resource.description && (
            <p className="image-description">{resource.description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <li className="content-list-item">
      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        {resource.title}
      </a>
    </li>
  );
};

const SubTaskItem: React.FC<SubTaskItemProps> = ({
  subtask,
  isExpanded,
  onToggleExpand,
  onStatusChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { Icon: StatusIcon, color: statusColor } = STATUS_CONFIG[subtask.status];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStatusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="subtask-item">
      <div className="subtask-header" onClick={onToggleExpand}>
        <div className="subtask-controls">
          <div 
            className="status-control" 
            ref={dropdownRef}
            onClick={handleStatusClick}
          >
            <StatusIcon
              className="status-icon"
              style={{ color: statusColor }}
              size={24}
            />
            {isDropdownOpen && (
              <StatusDropdown
                currentStatus={subtask.status}
                onStatusChange={onStatusChange}
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
              />
            )}
          </div>
          <h3 className="subtask-title">{subtask.title}</h3>
        </div>
        <div className="subtask-expand-icon">
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="subtask-details">
          <div className="detail-section">
            <h4>Description</h4>
            <RichText content={subtask.description} isSteps={false} />
          </div>
          
          {subtask.images && subtask.images.length > 0 && (
            <div className="detail-section">
              <h4>Images</h4>
              <div className="images-grid">
                {subtask.images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="instruction-image"
                    />
                    {image.caption && (
                      <span className="image-caption">{image.caption}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="detail-section">
            <h4>Steps</h4>
            <ol className="content-list">
              {subtask.steps.map((step, index) => (
                <RichText key={index} content={step} isSteps={true} />
              ))}
            </ol>
          </div>
          
          {subtask.additionalResources && subtask.additionalResources.length > 0 && (
            <div className="detail-section">
              <h4>Additional Resources</h4>
              <ul className="content-list">
                {subtask.additionalResources.map((resource, index) => (
                  <ResourceItem key={index} resource={resource} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubTaskItem;