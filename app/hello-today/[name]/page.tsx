export default function HelloName({ params }: { params: { name: string } }) {
  return <h1>Hello {params.name}!</h1>;
}
