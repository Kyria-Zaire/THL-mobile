from fastapi.testclient import TestClient

from thl_api.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_root() -> None:
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"name": "THL Mobile API", "version": "0.1.0"}
