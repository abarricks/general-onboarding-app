import React from 'react';
import { RichTextSegment, TextSpan } from '../types/tasks';

interface RichTextProps {
  content: RichTextSegment[];
  isSteps?: boolean;
}

const TextSpanComponent: React.FC<{ span: TextSpan }> = ({ span }) => {
  const style = {
    fontWeight: span.bold ? 'bold' : 'inherit',
    textDecoration: span.underline ? 'underline' : 'none',
    color: span.color || 'inherit',
  };

  if (span.href) {
    return (
      <a 
        href={span.href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="content-list-item a"
        style={{ 
          ...style,
          textDecoration: 'none',
          color: span.color || '#2563eb' 
        }}
        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
        onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
        onMouseEnter={e => e.currentTarget.style.color = '#1e40af'}
        onMouseLeave={e => e.currentTarget.style.color = span.color || '#2563eb'}
      >
        {span.text}
      </a>
    );
  }
  return <span style={style}>{span.text}</span>;
};

const RenderContent: React.FC<{ segment: RichTextSegment }> = ({ segment }) => (
  <span>
    {segment.spans.map((span, spanIndex) => (
      <TextSpanComponent key={spanIndex} span={span} />
    ))}
  </span>
);

const createNestedUl = (content: React.ReactNode, level: number): JSX.Element => {
  if (level <= 1) {
    return (
      <ul className="content-list">
        <li>{content}</li>
      </ul>
    );
  }
  
  return (
    <ul className="content-list">
      <li style={{ listStyleType: 'none', padding: 0 }}>
        {createNestedUl(content, level - 1)}
      </li>
    </ul>
  );
};

export const RichText: React.FC<RichTextProps> = ({ content, isSteps = false }) => {
  let currentLevel1 = 0;
  let currentLevel2 = 0;
  let currentLevel3 = 0;
  
  return (
    <div className="rich-text-container">
      {content.map((segment, index) => {
        if (isSteps) {
          const level = segment.bulletLevel || 0;

          if (level === 1) {
            currentLevel1++;
            currentLevel2 = 0;
            currentLevel3 = 0;
          } else if (level === 2) {
            currentLevel2++;
            currentLevel3 = 0;
          } else if (level === 3) {
            currentLevel3++;
          }

          const style = {
            counterReset: level === 1 ? 'level2' : level === 2 ? 'level3' : 'none',
            listStyleType: level === 1 ? 'decimal' :
                          level === 2 ? 'lower-alpha' :
                          level === 3 ? 'lower-roman' : 'decimal',
            marginLeft: level ? `${level}rem` : '0',
          };
          
          return (
            <li 
              key={index}
              style={style}
              className={`content-list-item level-${level}`}
              value={ level === 1 ? currentLevel1 : level === 2 ? currentLevel2 : level === 3 ? currentLevel3 : undefined}
            >
              <RenderContent segment={segment} />
            </li>
          );
        } 
        
        if (!segment.bulletLevel) {
          return (
            <div key={index} className="content-list-item">
              <RenderContent segment={segment} />
            </div>
          );
        }
          
        return (
          <div key={index}>
            {createNestedUl(<RenderContent segment={segment} />, segment.bulletLevel)}
          </div>
        );
      })}
    </div>
  );
};