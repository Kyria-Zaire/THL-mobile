import uvicorn


def dev() -> None:
    """Run the local development API on the project-reserved port."""
    uvicorn.run(
        "thl_api.main:app",
        host="127.0.0.1",
        port=8005,
        reload=True,
    )
