'use client';
import { MfeLoader } from "../ui-elements/mfe-loader/page";

export default function Home() {

  return (
    <MfeLoader src="http://localhost:3001/mfe-tasks.js">
      <mfe-home />
    </MfeLoader>
  );
}
