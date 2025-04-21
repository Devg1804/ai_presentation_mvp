
# import packages
import os
import requests 
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# API credentials
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Base endpoint for Groq LLaMA3-70B model
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

# Headers for the Groq API
HEADERS = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}

def generate_slide_content(topic: str, num_slides: int = 5):
    """
    Sends a prompt to the Groq LLaMA 3 model to generate structured slide content.

    Args:
        topic (str): The topic for the presentation.
        num_slides (int): Number of slides to generate.

    Returns:
        list of dict: Each dict contains title and bullet points for a slide.
    """

    prompt = f"""
    You are a presentation expert. Generate slide content for a {num_slides}-slide presentation on the topic "{topic}".

    Each slide should have:
    - A title
    - 3-5 bullet points
    - Keep it professional and concise
    - Return the output in JSON format like:
      [
        {{
          "title": "Slide Title 1",
          "bullets": ["point 1", "point 2"]
        }},
        ...
      ]
    """

    payload = {
        "model": "llama-3.3-70b-versatile",
        "temperature": 0.7,
        "max_tokens": 1024,
        "messages": [
            {
                "role": "user",
                "content": prompt.strip()
            }
        ]
    }

    response = requests.post(GROQ_API_URL, headers=HEADERS, json=payload)

    if response.status_code == 200:
        try:
            ai_reply = response.json()["choices"][0]["message"]["content"]
            # Evaluate the JSON-like response safely
            import json
            slides = json.loads(ai_reply)
            return slides
        except Exception as e:
            raise ValueError(f"Failed to parse AI response: {e}")
    else:
        raise RuntimeError(f"Groq API Error {response.status_code}: {response.text}")