import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return (
    <div>
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
