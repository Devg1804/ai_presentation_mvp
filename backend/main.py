from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
import uuid
import os

from api_setup import generate_slide_content
from ppt_generator import create_pptx_from_slides

# Initialize app
app = FastAPI()

# Enable CORS (important for frontend to call backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class SlideRequest(BaseModel):
    topic: str
    num_slides: int = 5

@app.post("/generate-slides")
async def generate_slides(request: SlideRequest):
    try:
        # Step 1: Generate slide content using LLaMA 3
        slides = generate_slide_content(request.topic, request.num_slides)

        # Step 2: Generate PPTX file from content
        filename = f"slides_{uuid.uuid4().hex}.pptx"
        filepath = os.path.join("generated", filename)
        os.makedirs("generated", exist_ok=True)
        create_pptx_from_slides(slides, filepath)

        # Step 3: Return downloadable file
        return FileResponse(
            filepath,
            media_type="application/vnd.openxmlformats-officedocument.presentationml.presentation",
            filename=filename
        )
        # Step 3: Return the file URL (host + route)
        # file_url = f"{fastapi_request.base_url}download/{filename}"
        # return JSONResponse(content={"file_url": file_url})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @app.get("/download/{filename}")
# async def download_file(filename: str):
#     file_path = os.path.join("generated", filename)
#     if os.path.exists(file_path):
#         return FileResponse(
#             path=file_path,
#             media_type="application/vnd.openxmlformats-officedocument.presentationml.presentation",
#             filename=filename
#         )
#     raise HTTPException(status_code=404, detail="File not found")

@app.get("/")
def read_root():
    return {"message": "SlideGen AI backend is running!"}