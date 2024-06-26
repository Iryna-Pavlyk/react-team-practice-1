import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import articles from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={articles.poster}
          tag={articles.tag}
          title={articles.title}
          description={articles.description}
          name={articles.name}
          avatar={articles.avatar}
          postedAt={articles.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
