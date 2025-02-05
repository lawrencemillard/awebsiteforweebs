import { Code2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-muted">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">© 2025 VeryCoolSoftware :3. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://codeberg.org/fortheinternet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            <Code2 className="h-5 w-5" />
            <span>Codeberg</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

