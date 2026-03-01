import http.server
import socketserver

class OctopusHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"[!] Octopus Core: Received request for {self.path}")
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8000
with socketserver.TCPServer(("", PORT), OctopusHandler) as httpd:
    print(f"--- OCTOPUS SYSTEM ONLINE ---")
    print(f"Target Port: {PORT}")
    print("Waiting for HTML Core to connect...")
    httpd.serve_forever()
