import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import GithubActivity from "./GithubActivity";
import { ThemeProvider } from "../../context/ThemeContext";

function renderWithTheme(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

const mockProfile = {
  login: "aryanjsx",
  name: "Aryan Kumar",
  avatar_url: "https://avatars.githubusercontent.com/u/12345",
  html_url: "https://github.com/aryanjsx",
  bio: "Full Stack Developer",
  public_repos: 10,
  followers: 5,
  following: 3,
};

const mockRepos = [
  {
    id: 1,
    name: "test-repo",
    html_url: "https://github.com/aryanjsx/test-repo",
    description: "A test repository",
    stargazers_count: 5,
    language: "JavaScript",
    fork: false,
  },
];

describe("GithubActivity", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("shows loading state initially", () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));
    renderWithTheme(<GithubActivity />);
    expect(screen.getByText(/loading github activity/i)).toBeInTheDocument();
  });

  it("renders profile and repos after successful fetch", async () => {
    global.fetch.mockImplementation((url) => {
      if (url.includes("/repos")) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve(mockRepos) });
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve(mockProfile) });
    });

    renderWithTheme(<GithubActivity />);

    await waitFor(() => {
      expect(screen.getByText("Aryan Kumar")).toBeInTheDocument();
    });
    expect(screen.getByText("@aryanjsx")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("test-repo")).toBeInTheDocument();
  });

  it("shows error state on API failure", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));

    renderWithTheme(<GithubActivity />);

    await waitFor(() => {
      expect(screen.getByText("GitHub Data Unavailable")).toBeInTheDocument();
    });
  });

  it("shows rate limit message on 403 response", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({ ok: false, status: 403 })
    );

    renderWithTheme(<GithubActivity />);

    await waitFor(() => {
      expect(screen.getByText(/rate limit/i)).toBeInTheDocument();
    });
  });
});
