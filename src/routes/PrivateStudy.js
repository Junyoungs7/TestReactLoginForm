import { useEffect, useState } from "react";

function PrivateStudy() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <div>Loading...</div> : null}</div>;
}

export default PrivateStudy;
