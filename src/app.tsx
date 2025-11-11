import { Profile } from "./profile";

export function App() {
  return (
    <div>
      <h1>METODO: WHAT TO DO TODAY?</h1>
      <Profile
        imageUrl="https://i.imgur.com/MK3eW3Am.jpg"
        name="Katherine Johnson"
      />
      <Profile
        imageUrl="https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg"
        name="Jordan Walke"
      />
    </div>
  );
}
