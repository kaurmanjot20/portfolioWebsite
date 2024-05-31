import react from './assets/react.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import node from './assets/nodejs-1-logo-svgrepo-com.svg'
import js from './assets/js.svg'
import cpp from './assets/cpp.svg'
import java from './assets/java.svg'
import python from './assets/python.svg'
import vscode from './assets/vscode.svg'
import github from './assets/github-142-svgrepo-com.svg'
import vercel from './assets/vercel-logo-svgrepo-com.svg'

export default {
    stack: [
        
        {
            id: 2,
            title: "HTML",
            coverImg: html
        },
        {
            id: 2,
            title: "CSS",
            coverImg: css
        },
        {
            id: 3,
            title: "React",
            coverImg: react
        },
        {
            id: 4,
            title: "NodeJS",
            coverImg: node
        }
        
    ],
    programmingLanguages: [
        {
            id: 1,
            title: "JavaScript",
            coverImg: js
        },
        {
            id: 2,
            title: "C++",
            coverImg: cpp
        },
        {
            id: 3,
            title: "Java",
            coverImg: java
        },
        {
            id: 4,
            title: "Python",
            coverImg: python
        }
    ],
    tools: [
        {
            id: 1,
            title: "VS Code",
            coverImg: vscode
        },
        {
            id: 2,
            title: "GitHub",
            coverImg: github
        },
        {
            id: 3,
            title: "Vercel",
            coverImg: vercel
        }
    ]
};
const SvgContainer = ({ children }) => (
    <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '10px' }}>
        {children}
    </div>
);

const Stack = () => (
    <div>
        {tools.map(tool => (
            <SvgContainer key={tool.id}>
                <img src={tool.coverImg} alt={tool.title} />
            </SvgContainer>
        ))}
    </div>
);