import { render, screen } from "@testing-library/react";
import { IMeme } from "../../interfaces/interfaces";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import MemeContext from "../../store/context/MemeContext/MemeContext";

describe("Given a Card component", () => {
  const fakeMeme: IMeme = {
    author: "",
    likes: 3,
    title: "a",
    url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
    postLink: "prueba",
    subreddit: "aaa",
    isFavorite: false,
    id: "",
    isRendered: true,
  };
  describe("When it's instantiated and receives a meme picture", () => {
    test("Then it should show a picture", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} currentPage="mainPage" />
          </BrowserRouter>
        </>
      );
      const meme = screen.getByRole("img");

      expect(meme).toBeInTheDocument();
    });
  });

  describe("When it receives a fake meme by props", () => {
    test("Then it should show an image with the fakeMeme url", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} currentPage="mainPage" />
          </BrowserRouter>
        </>
      );
      const urlCard = screen.getByRole("img");

      expect((urlCard as HTMLImageElement).src).toBe(fakeMeme.url);
    });

    test("Then it should show an image with the fakeMeme title as alt text", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} currentPage="mainPage" />
          </BrowserRouter>
        </>
      );
      const altCard = screen.getByRole("img");

      expect((altCard as HTMLImageElement).alt).toBe(fakeMeme.title);
    });
    test("Then it should trigger an action when click the button", () => {
      const fakeMemeFavorite: IMeme = {
        author: "",
        likes: 3,
        title: "a",
        url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
        postLink: "prueba",
        subreddit: "aaa",
        isFavorite: true,
        id: "",
        isRendered: true,
      };
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMemeFavorite} currentPage="mainPage" />
          </BrowserRouter>
        </>
      );

      const button = screen.getAllByRole("button");
      userEvent.click(button[0]);

      expect(button[0]).toBeInTheDocument();
    });
  });

  describe("When user click on 'delete' button", () => {
    test("Then it call the function assgined", () => {
      const mockFunction = jest.fn();
      const testButton = "Delete";
      const fakerMeme: IMeme = {
        author: "",
        likes: 3,
        title: "a",
        url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
        postLink: "prueba",
        subreddit: "aaa",
        isFavorite: false,
        id: "",
        isRendered: true,
      };
      const fakeMemeArray: IMeme[] = [
        {
          author: "",
          likes: 3,
          title: "a",
          url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
          postLink: "prueba",
          subreddit: "aaa",
          isFavorite: false,
          id: "",
          isRendered: true,
        },
      ];

      render(
        <MemeContext.Provider
          value={{ memes: fakeMemeArray, dispatch: mockFunction }}
        >
          <BrowserRouter>
            <Card meme={fakerMeme} currentPage="favoritesPage" />
          </BrowserRouter>
        </MemeContext.Provider>
      );

      const button = screen.getByRole("button", { name: testButton });
      userEvent.click(button);

      expect(mockFunction).toBeCalled();
    });
  });
});
