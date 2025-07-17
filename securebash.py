import base64
import json
import time

def generate_token(page, expiry_seconds=3600):
    payload = {
        "page": page,
        "exp": int(time.time()) + expiry_seconds
    }
    token = base64.urlsafe_b64encode(json.dumps(payload).encode()).decode()
    return f"https://aiims.pages.dev/securetoken.html?token={token}"

# 🔰 Multiple Pages List
pages = [
    "lecture.html",
    "lecture2.html",
    "chemistry/chapter1.html",
    "biology/test.html"
]

# 🔁 Generate Tokens for Each Page
for page in pages:
    print(f"{page} => {generate_token(page)}")