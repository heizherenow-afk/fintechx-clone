import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        if self.path.endswith('.mjs'):
            self.send_header('Content-Type', 'application/javascript; charset=utf-8')
        elif self.path.endswith('.woff2'):
            self.send_header('Content-Type', 'font/woff2')
        elif self.path.endswith('.svg'):
            self.send_header('Content-Type', 'image/svg+xml')
        super().end_headers()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"FintechX Clone server running at http://localhost:{PORT}")
    print(f"Serving directory: {DIRECTORY}")
    print("Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
