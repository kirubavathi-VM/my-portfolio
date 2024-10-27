import React from 'react';
import { Container } from 'react-bootstrap';

const Experience = () => {
    return (
        <Container fluid className='m-0 p-0' id="experience">
            <div className='experience-section p-5'>
                    <h1 className='mb-4'>Professional Experience</h1>
                    <div className="divider mb-4"></div>
                    <div className='mt-4'>
                        <h3>Frontend Developer - TITO (February 2023 - Present)</h3>
                        <p>
                            Developed the HydraSave web application for NITTO, a data normalization tool that enables users to input raw data, which is then processed and displayed in both graphical and tabular formats.
                            Built dynamic user interfaces using React.js and Next.js, implemented user authentication, and collaborated with backend developers to enhance website functionality.
                            Utilized Jira for project management and Git for version control.
                        </p>

                        <h3>AI Chatbot Developer (Personal Project)</h3>
                        <p>
                            Developed an AI chatbot named KiruBot utilizing Ollama's LLM (Llama 3.1) integrated with Langchain.
                            The chatbot features a user-friendly interface built with Streamlit, facilitating engaging conversations.
                            It dynamically processes user inputs, delivering relevant and context-aware responses in real-time.
                        </p>
                    </div>
            </div>
        </Container>
    );
};

export default Experience;
