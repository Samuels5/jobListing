import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/new?myVariable=${1}`);
  };

  return (
    <div>
      <button onClick={handleNavigate}>Navigate to About Page</button>
    </div>
  );
}

export default HomePage;