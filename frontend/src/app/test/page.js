import CategoryFond from "@/Components/Test/CategoryFond";

export default function HomePage() {
  return (
    <>
      <CategoryFond
        category="education"
        title="Education Fundraisers"
      />

      <CategoryFond
        category="medical"
        title="Medical Fundraisers"
      />

      <CategoryFond
        category="family"
        title="Family Support Fundraisers"
      />
    </>
  );
}
