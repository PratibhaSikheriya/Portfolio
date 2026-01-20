"use client";
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 text-center border-t border-zinc-800">
        <h2 className="text-2xl font-bold">Pratibha Sikheriya</h2>
        <div className="flex justify-center gap-6 mt-4 text-purple-400">
            <a href="mailto:pratibhasikheriya19@gmail.com">Email</a>
            <a href="https://linkedin.com/in/pratibha-sikheriya" target="_blank">LinkedIn</a>
            <a href="https://github.com/PratibhaSikheriya" target="_blank">GitHub</a>
        </div>
    </footer>
  );
}