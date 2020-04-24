import Link from "next/link"

const Index = () => (
  <div>
    <h1>Hello, Martin</h1>
    <ul>
      <PostLink id="nextjs-1" title="Hello NextJS 111 테스트"/>
      <PostLink id="nextjs-2" title="Hello NextJS 222 테스트"/>
      <PostLink id="nextjs-3" title="Hello NextJS 333 테스트"/>
    </ul>
  </div>
);

const PostLink = ({ title, id }) => (
    <li>
      <Link as={`/p/${id}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
);

export default Index;
