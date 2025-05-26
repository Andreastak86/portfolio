export default function Footer() {
    return (
        <footer className='w-full bg-black/80 text-gray-400 py-6 mt-12 border-t border-cyan-500/10'>
            <div className='max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm'>
                <p>
                    &copy; {new Date().getFullYear()} yourName. All rights
                    reserved.
                </p>
                <div className='flex gap-4'>
                    <a
                        href='https://github.com/yourusername'
                        className='hover:text-cyan-400 transition'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </a>
                    <a
                        href='mailto:mail@mail.com'
                        className='hover:text-cyan-400 transition'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
