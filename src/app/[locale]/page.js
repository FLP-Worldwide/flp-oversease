import { getMessages } from '../../i18n';

export default async function HomePage({ params }) {
  const { locale } = await params; // ✅ IMPORTANT FIX
  const messages = await getMessages(locale);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        {messages.title}
      </h1>
      <p className="mt-4">
        {messages.description}
      </p>
    </main>
  );
}
