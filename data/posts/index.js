import source1 from './source1.json';
import source2 from './source2.json';

// Combine sources
const allPosts=source2.concat(source1)

const getPublishedPost = (posts) => {
  return posts.filter((post) => !post.isDraft);
};


export const publishedPosts = getPublishedPost(allPosts);

export function getPostBySlug(Slug) {
  return allPosts.find((item) => item.Slug == Slug);
}