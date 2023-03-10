import { Dispatch } from "react";
import { Action, ShowLoadingAction } from "../store/types/actions";

export interface IMeme {
  url: string;
  title: string;
  author: string;
  likes: number;
  postLink: string;
  subreddit: string;
  isFavorite: boolean;
  id: string;
  isRendered: boolean;
}

export interface IMemeContext {
  memes: IMeme[];
  dispatch: Dispatch<Action>;
}

export interface IData {
  count: number;
  memes: [
    {
      url: string;
      title: string;
      author: string;
      ups: number;
      postLink: string;
      subreddit: string;
    }
  ];
}

export interface IDataMemes {
  url: string;
  title: string;
  author: string;
  ups: number;
  postLink: string;
  subreddit: string;
}

export interface UIState {
  isLoading: boolean;
  feedback: {
    isOpen: boolean;
    modalType: "succes" | "error";
  };
}

export interface IUIContext {
  isLoading: boolean;
  feedback: { isOpen: boolean; modalType: "error" | "succes" };
  dispatch: Dispatch<ShowLoadingAction>;
}
