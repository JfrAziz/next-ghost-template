import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";

const PostTitle = ({ children }) => (
  <h1 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none mt-16 mb-12 text-center md:text-left">
    {children}
  </h1>
);

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage} width={2000} height={1216} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Avatar name={author.name} picture={author.profile_image} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}