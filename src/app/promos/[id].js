// pages/promos/[id].js
import { useRouter } from 'next/router';
import PromosDetail from '../../components/PromosDetail';

export default function PromosDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PromosDetail id={id} />
  );
}
