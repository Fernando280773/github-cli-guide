/* Terminal Noir Design - Home Page
 * - Full GitHub CLI reference guide
 * - Interactive command blocks
 * - Organized sections with navigation
 */

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { CommandBlock } from "@/components/CommandBlock";
import { CommandCard } from "@/components/CommandCard";
import { DataTable } from "@/components/DataTable";
import { JsonBlock } from "@/components/JsonBlock";
import { 
  Terminal, 
  Settings, 
  FolderGit2, 
  GitBranch, 
  Search, 
  Zap,
  GitPullRequest,
  Bug,
  Package,
  Workflow,
  Puzzle,
  Github
} from "lucide-react";

export default function Home() {
  // Sample data for tables
  const repoListData = [
    { name: "Fernando280773/create-my-agent-test", description: "my agent test", visibility: "public, fork", updated: "about 1 month ago" },
    { name: "Fernando280773/tamil-coding-club", description: "-", visibility: "public", updated: "about 1 month ago" },
    { name: "Fernando280773/YTCHelp", description: "Community website...", visibility: "public", updated: "about 4 months ago" },
    { name: "Fernando280773/Kobi-AI-Solution-LTD", description: "-", visibility: "public", updated: "about 11 months ago" },
  ];

  const issueSearchData = [
    { repo: "tensorflow/tensorflow", id: "#102418", title: "Bug or Just D...", labels: "type:docs-bug...", updated: "about 23 days ago" },
    { repo: "tensorflow/tensorflow", id: "#107125", title: "bug in Tensor...", labels: "type:bug, com...", updated: "about 2 days ago" },
    { repo: "tensorflow/tensorflow", id: "#101445", title: "Bug in tf.ker...", labels: "type:docs-bug...", updated: "about 2 months ago" },
  ];

  const prSearchData = [
    { repo: "microsoft/vscode", id: "#284238", title: "[TYPO-FIX]Fixing...", labels: "triage-needed", updated: "about 11 days ago" },
    { repo: "microsoft/vscode", id: "#268897", title: "fix: fix focus c...", labels: "-", updated: "about 8 days ago" },
    { repo: "microsoft/vscode", id: "#279579", title: "fix: fix termina...", labels: "-", updated: "about 1 month ago" },
  ];

  const workflowData = [
    { name: "Unit and Integration Tests", state: "active", id: "25016" },
    { name: "Lint", state: "active", id: "925645" },
    { name: "Code Scanning", state: "active", id: "1208059" },
    { name: "PR Automation", state: "active", id: "6579755" },
    { name: "Issue Automation", state: "active", id: "15766164" },
  ];

  const extensionData = [
    { repo: "dlvhdr/gh-dash", description: "A rich terminal UI for GitHub" },
    { repo: "github/gh-actions-importer", description: "GitHub Actions Importer helps you plan and automate..." },
    { repo: "github/gh-skyline", description: "Generate a 3D model of your contributions" },
    { repo: "github/gh-copilot", description: "Ask for assistance right in your terminal" },
    { repo: "basecamp/gh-signoff", description: "Local CI. Sign off on your own work." },
  ];

  const trendingReposJson = [
    { name: "codecrafters-io/build-your-own-x", stars: 453793, language: "Markdown", description: "Master programming by recreating your favorite technologies from scratch." },
    { name: "freeCodeCamp/freeCodeCamp", stars: 435491, language: "TypeScript", description: "freeCodeCamp.org's open-source codebase and curriculum." },
    { name: "sindresorhus/awesome", stars: 426849, language: null, description: "Awesome lists about all kinds of interesting topics" },
    { name: "public-apis/public-apis", stars: 389146, language: "Python", description: "A collective list of free APIs" },
  ];

  const repoDetailsJson = {
    name: "tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone",
    stargazerCount: 193159,
    forkCount: 75152,
    primaryLanguage: { name: "C++" },
    licenseInfo: { key: "apache-2.0", name: "Apache License 2.0" },
    createdAt: "2015-11-07T01:19:20Z",
    updatedAt: "2026-01-03T10:27:37Z"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content area with left padding for sidebar */}
      <div className="lg:pl-64">
        <HeroSection />
        
        <main className="container max-w-4xl mx-auto px-4 pb-24">
          {/* Introduction Section */}
          <Section
            id="intro"
            title="Introduction"
            description="The GitHub Command Line Interface (CLI), gh, is a powerful tool that brings GitHub to your terminal. It allows you to seamlessly interact with your GitHub repositories, manage issues, pull requests, and much more."
            icon={<Terminal className="w-5 h-5" />}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <CommandCard
                title="Core Commands"
                description="Essential commands for daily GitHub operations"
                icon={<Github className="w-5 h-5" />}
                commands={["repo", "issue", "pr", "gist", "release"]}
              />
              <CommandCard
                title="GitHub Actions"
                description="Manage workflows and CI/CD pipelines"
                icon={<Workflow className="w-5 h-5" />}
                commands={["run", "workflow", "cache"]}
              />
              <CommandCard
                title="Search & Discovery"
                description="Find repositories, issues, and code"
                icon={<Search className="w-5 h-5" />}
                commands={["search repos", "search issues", "search prs"]}
              />
              <CommandCard
                title="Extensions"
                description="Extend gh with community plugins"
                icon={<Puzzle className="w-5 h-5" />}
                commands={["extension install", "extension list"]}
              />
            </div>
          </Section>

          {/* Authentication Section */}
          <Section
            id="auth"
            title="Authentication"
            description="The GitHub CLI is pre-authenticated in this environment. You can verify the authentication status at any time."
            icon={<Settings className="w-5 h-5" />}
          >
            <CommandBlock
              command="gh auth status"
              description="Check your current authentication status"
              output={`github.com
  ✓ Logged in to github.com account Fernando280773 (GH_TOKEN)
  - Active account: true
  - Git operations protocol: https
  - Token: ghu_************************************`}
            />
            
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Authentication Methods</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <code className="text-accent">gh auth login</code> - Interactive browser-based login
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <code className="text-accent">gh auth login --with-token</code> - Login with a personal access token
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <code className="text-accent">gh auth logout</code> - Log out of GitHub
                </li>
              </ul>
            </div>
          </Section>

          {/* Repository Management Section */}
          <Section
            id="repos"
            title="Repository Management"
            description="List, view, clone, and manage your GitHub repositories directly from the command line."
            icon={<FolderGit2 className="w-5 h-5" />}
          >
            <CommandBlock
              command="gh repo list --limit 10"
              description="List your repositories with a limit"
            />
            
            <DataTable
              title="Your Repositories"
              columns={[
                { key: "name", header: "Name" },
                { key: "description", header: "Description" },
                { key: "visibility", header: "Info" },
                { key: "updated", header: "Updated" },
              ]}
              data={repoListData}
            />

            <CommandBlock
              command="gh repo view tensorflow/tensorflow --json name,description,stargazerCount,forkCount,primaryLanguage,licenseInfo"
              description="View detailed repository information in JSON format"
            />
            
            <JsonBlock
              data={repoDetailsJson}
              title="Repository Details"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  Create & Clone
                </h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo create my-project</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo clone owner/repo</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo fork owner/repo</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  Repository Settings
                </h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo edit --visibility public</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo delete owner/repo</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh repo archive owner/repo</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Issues & PRs Section */}
          <Section
            id="issues"
            title="Issues & Pull Requests"
            description="Search, create, and manage issues and pull requests across repositories."
            icon={<GitBranch className="w-5 h-5" />}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-primary" />
                  Searching Issues
                </h3>
                <CommandBlock
                  command='gh search issues "bug" --repo tensorflow/tensorflow --limit 5 --state open'
                  description="Search for open bug issues in a repository"
                />
                <div className="mt-4">
                  <DataTable
                    title="Search Results"
                    columns={[
                      { key: "repo", header: "Repository" },
                      { key: "id", header: "ID" },
                      { key: "title", header: "Title" },
                      { key: "labels", header: "Labels" },
                      { key: "updated", header: "Updated" },
                    ]}
                    data={issueSearchData}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GitPullRequest className="w-5 h-5 text-primary" />
                  Searching Pull Requests
                </h3>
                <CommandBlock
                  command='gh search prs "fix" --repo microsoft/vscode --limit 5 --state open'
                  description="Search for open fix PRs in a repository"
                />
                <div className="mt-4">
                  <DataTable
                    title="Pull Request Results"
                    columns={[
                      { key: "repo", header: "Repository" },
                      { key: "id", header: "ID" },
                      { key: "title", header: "Title" },
                      { key: "labels", header: "Labels" },
                      { key: "updated", header: "Updated" },
                    ]}
                    data={prSearchData}
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3">Common Operations</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground font-sans text-xs uppercase tracking-wider mb-2">Issues</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh issue create</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh issue list</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh issue view 123</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh issue close 123</p>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground font-sans text-xs uppercase tracking-wider mb-2">Pull Requests</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh pr create</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh pr list</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh pr checkout 456</p>
                    <p className="text-muted-foreground"><span className="text-primary">$</span> gh pr merge 456</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Search & API Section */}
          <Section
            id="search"
            title="Search & API"
            description="Leverage powerful search capabilities and direct API access for advanced use cases."
            icon={<Search className="w-5 h-5" />}
          >
            <CommandBlock
              command={`gh api search/repositories -X GET -f q='stars:>50000' -f sort=stars -f per_page=5 --jq '.items[] | {name: .full_name, stars: .stargazers_count, language: .language}'`}
              description="Search for trending repositories using the GitHub API"
            />
            
            <JsonBlock
              data={trendingReposJson}
              title="Trending Repositories (50k+ stars)"
            />

            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-3">API Request Methods</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs">GET</span>
                  <code className="text-muted-foreground">gh api /user</code>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-xs">POST</span>
                  <code className="text-muted-foreground">gh api /repos/owner/repo/issues -f title="Bug"</code>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs">PATCH</span>
                  <code className="text-muted-foreground">gh api /repos/owner/repo -f description="New desc"</code>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-destructive/20 text-destructive text-xs">DELETE</span>
                  <code className="text-muted-foreground">gh api /repos/owner/repo -X DELETE</code>
                </div>
              </div>
            </div>
          </Section>

          {/* Advanced Features Section */}
          <Section
            id="advanced"
            title="Advanced Features"
            description="Explore GitHub Actions, workflows, and CLI extensions to supercharge your development workflow."
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  GitHub Actions & Workflows
                </h3>
                <CommandBlock
                  command="gh workflow list --repo cli/cli --limit 5"
                  description="List workflows in a repository"
                />
                <div className="mt-4">
                  <DataTable
                    title="Workflows"
                    columns={[
                      { key: "name", header: "Name" },
                      { key: "state", header: "State" },
                      { key: "id", header: "ID" },
                    ]}
                    data={workflowData}
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3">Workflow Commands</h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh run list <span className="text-muted-foreground/60">- List recent workflow runs</span></p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh run view 12345 <span className="text-muted-foreground/60">- View a specific run</span></p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh run watch 12345 <span className="text-muted-foreground/60">- Watch a run in progress</span></p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh workflow run deploy.yml <span className="text-muted-foreground/60">- Trigger a workflow</span></p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-primary" />
                  CLI Extensions
                </h3>
                <CommandBlock
                  command="gh extension search --limit 5"
                  description="Search for available extensions"
                />
                <div className="mt-4">
                  <DataTable
                    title="Popular Extensions"
                    columns={[
                      { key: "repo", header: "Repository" },
                      { key: "description", header: "Description" },
                    ]}
                    data={extensionData}
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3">Extension Management</h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh extension install dlvhdr/gh-dash</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh extension list</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh extension upgrade dlvhdr/gh-dash</p>
                  <p className="text-muted-foreground"><span className="text-primary">$</span> gh extension remove dlvhdr/gh-dash</p>
                </div>
              </div>

              <CommandBlock
                command="gh release list --repo nodejs/node --limit 5"
                description="List releases from a repository"
                output={`TITLE                                        TYPE    TAG NAME  PUBLISHED
2025-12-10, Version 24.12.0 'Krypton' (L...          v24.12.0  about 23 days ago
2025-11-25, Version 20.19.6 'Iron' (LTS)...          v20.19.6  about 1 month ago
2025-11-17, Version 25.2.1 (Current), @a...  Latest  v25.2.1   about 1 month ago
2025-11-11, Version 25.2.0 (Current), @a...          v25.2.0   about 1 month ago
2025-11-11, Version 24.11.1 'Krypton' (L...          v24.11.1  about 1 month ago`}
              />
            </div>
          </Section>

          {/* Footer */}
          <footer className="mt-24 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">GitHub CLI Reference Guide</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a 
                  href="https://cli.github.com/manual" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Official Docs
                </a>
                <a 
                  href="https://github.com/cli/cli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub Repo
                </a>
                <a 
                  href="https://cli.github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Install CLI
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
