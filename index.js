import confetti from "canvas-confetti";
import { helloWorld } from "./hello-world";

helloWorld();

confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
