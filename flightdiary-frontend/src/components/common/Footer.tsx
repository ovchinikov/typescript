import { GitHubLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
    return (
        <footer className="p-4 text-center flex justify-center">
            <div>
            <p>&copy; {new Date().getFullYear()}</p>
            </div>
            <div>
            <a href="http://github.com/ovchinikov" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="w-6 h-6 ml-2" />
            </a>
            </div>

        </footer>
    )
}


export default Footer
