import React from 'react';
import { motion } from 'framer-motion';

const CodeSamples = () => {
  const samples = [
    {
      title: "React Component with TypeScript",
      description: "A reusable button component with type safety and customizable props.",
      code: `import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-all';
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${className} \${isLoading ? 'opacity-70 cursor-not-allowed' : ''}\`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;`,
      language: "typescript",
      link: "#"
    },
    {
      title: "FastAPI Route with Authentication",
      description: "A protected API endpoint using JWT authentication and Pydantic models.",
      code: `from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
import jwt
from typing import Optional

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate credentials",
            )
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )
    return User(username=username)

@router.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user`,
      language: "python",
      link: "#"
    }
  ];

  return (
    <section id="code-samples" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Samples</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {samples.map((sample, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{sample.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{sample.description}</p>
              </div>
                  <a 
                    href={sample.link} 
                    className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                  >
                    Open in Playground
                  </a>
                </div>
                
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <pre className="p-4 text-gray-200 overflow-x-auto text-sm md:text-base">
                    <code>{sample.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeSamples;