// our-domain.com/art/<anything at all>
// it's dynamic because the file name is written in brackets

import { useRouter } from "next/router";

const ModernArtPage = () => {
  const router = useRouter();

  // url param is stored at router.query.modernArt
  // property is modernArt because that's the file name
  const { query } = router;
  const { modernArt } = query;

  return <h1>The Modern Art Page</h1>;
};

export default ModernArtPage;
