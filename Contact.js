export default function Contact() {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" required />
      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}