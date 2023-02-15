import Section from "@components/Section/Section";
import useTranslation from "@hooks/useTranslation";
import NewsList from "PageBuilder/Components/Listing/frontend/NewList";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";

const PersonProjects = (props: { _key: string }) => {
  const { _key } = props;
  const { data } = usePageBuilderContext();
  const items = data?._type === "person" ? data.newsItems : null;

  const { header } = useTranslation({
    header: { default: "Projekte", en: "Projects" },
  });
  if (!items) return null;

  return (
    <Section width="full" noPadding noProse topSpace="none">
      <h2 className="header1 px-sides max-w-6xl mx-auto mb-12">{header}</h2>

      <NewsList
        _type="listing"
        variant="carousel"
        _key={_key}
        items={items}
        contentType="news"
      />
    </Section>
  );
};

export default PersonProjects;
