import Link from "next/link";
import navbar from "../components/navbar";

const Index = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </li>
    </ul>
    <h1>Welcome to Plan-it Fitness</h1>
  </div>
);

export default Index;
