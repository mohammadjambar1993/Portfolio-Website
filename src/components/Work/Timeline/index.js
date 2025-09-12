import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: '2021 - Present',
      title: 'R&D Software Developer 1',
      company: 'Myant Inc. Toronto, Canada',
      description: [
        'Developing Python-based gateway systems for real-time acquisition, processing, and transmission of ECG and IMU signals, ensuring low-latency, reliable data flow for wearable medical devices.',
        'Designing modular signal-processing pipelines with optimized algorithms and data structures, improving streaming performance and reducing memory usage by 30%.',
        'Containerizing and deploying systems with Docker on Raspberry Pi, enabling fault-tolerant, portable, and scalable execution in distributed environments.',
        'Building monitoring and logging frameworks to detect anomalies, track system health, and maintain continuous uptime.',
        'Creating real-time dashboards for visualizing fatigue metrics and multi-sensor physiological data, improving insight accessibility for researchers.',
        'Developing Python modules for processing and analyzing neurostimulation data from industry-scalable textile electrodes, contributing to a publication in Wiley Advanced.',
        'Developing and deploying a fatigue detection algorithm using IMU data, implemented on Raspberry Pi with a real-time dashboard, generating $500,000 in project funding from the Canadian Space Agency',
      ],
      expanded: false,
    },
    {
      date: '2019 - 2020',
      title: 'Software Developer',
      company: 'Nobaf Persian Tehran, Iran',
      description: [
        'Built and maintained <b>backend services</b> and <b>REST APIs</b> using <b>Python</b> and <b>Django</b> to support application features and workflows.',
        'Participated in <b>architecture and design discussions</b>, selecting technologies for scalable and maintainable systems.',
        'Wrote <b>unit and integration tests</b> to ensure code reliability and maintainability.',
        'Troubleshot and resolved system issues, analyzing impacts on <b>databases (PostgreSQL/MySQL), servers, and network operations</b>.',
        'Optimized backend performance and implemented best practices for <b>API design, authentication, and data handling</b>.',
      ],
      expanded: false,
    },
    {
      date: '2017 - 2019',
      title: 'ATM System Software Development & Intern',
      company: 'Adonis Company - Tehran, Iran',
      description: [
        'Assisted in developing backend data pipelines for ATM transactions, supporting logging, storage, and retrieval of financial and operational data using <b>MySQL</b>, <b>PostgreSQL</b>, and AWS <b>RDS</b>.',
        'Helping design and optimize algorithms and data structures for transaction handling, error detection, and recovery.',
        'Supporting the creation of <b>data aggregation and monitoring services</b> using <b>AWS S3</b>, <b>Redshift</b>, and <b>ETL tools</b> to assist reporting and analytics.',
        'Participating in testing, debugging, and optimization of data workflows to maintain <b>system performance and data integrity</b>.',
      ],
      expanded: false,
    },
      {
      title: 'ACTIVITIES & RECOGNITION',
      description: [
        'Industry-Scalable Reusable Textile Electrodes for Neurostimulation Applications <b>(Wiley Advanced)</b>.',
        'Developed a fingerprint-based electric lock system for University Competition.'
      ],
      expanded: false,
    },
  ]);
  


  const handleItemClick = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, idx) =>
        idx === index ? { ...event, expanded: !event.expanded } : event
      )
    );
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.company && <h4 className="company">{event.company}</h4>}
            <div className="date">{event.date}</div>
            {event.expanded && (
              <div className="description">
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            )}
            {!event.expanded && (
              <div className="more">
                <p>Click for more</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
