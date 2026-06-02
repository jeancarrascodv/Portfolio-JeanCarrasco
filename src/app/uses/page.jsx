import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import UsesHeader from "@/components/UsesHeader/UsesHeader.jsx";
import UsesSection from "@/components/UsesSection/UsesSection.jsx";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const itemsArray = [
    {
      title: "The AI, automation, and engineering stack I build with.",
      content: [
        {
          inside:
            "These are the models, frameworks, and platforms I use to put AI agents into real business processes — automating routine work, reducing incidents, and helping teams do more with less.",
        },
      ],
    },
  ];

  const items = [
    {
      groupName: "AI Models & APIs",
      items: [
        {
          title: "OpenAI & Anthropic (Claude) APIs",
          description:
            "My primary models for reasoning, classification, and agentic workflows. I design prompts, tool calls, and structured outputs that turn an LLM into a dependable part of a process.",
        },
        {
          title: "Vercel AI SDK & AI Gateway",
          description:
            "I build AI features and agents with the AI SDK and route requests through the AI Gateway for provider failover, observability, and cost control across multiple models.",
        },
      ],
    },
    {
      groupName: "Agent & Automation Frameworks",
      items: [
        {
          title: "LangChain & LangGraph",
          description:
            "For building multi-step AI agents with memory, tools, and branching logic — orchestrating how an agent perceives, decides, and acts inside a workflow.",
        },
        {
          title: "n8n, Make & Zapier",
          description:
            "Low-code automation platforms I use to connect systems, trigger AI agents, and remove repetitive handoffs end-to-end — fast to ship and easy for teams to maintain.",
        },
      ],
    },
    {
      groupName: "Data, Retrieval & Backend",
      items: [
        {
          title: "Python & Node.js",
          description:
            "The languages behind my automations and integrations — from data pipelines and API connectors to custom agent tooling and webhooks.",
        },
        {
          title: "Vector Databases & RAG",
          description:
            "Using tools like Supabase (pgvector) and Pinecone to give agents reliable, grounded access to a company's own knowledge through retrieval-augmented generation.",
        },
      ],
    },
    {
      groupName: "Delivery & Operations",
      items: [
        {
          title: "Vercel, Docker & GitHub Actions",
          description:
            "How I ship and run automations reliably — serverless deployment, containerized services, and CI/CD so every solution stays stable in production.",
        },
        {
          title: "Process Mapping & BI",
          description:
            "Before automating, I map the real workflow and measure it with tools like Power BI — so every AI agent targets the bottleneck with the highest impact on cost and time.",
        },
      ],
    },
  ];

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
          <div className="flex w-full items-center justify-between">
            <div> </div>
            <div>
              <Navbar options={myArray} />
            </div>
            <div className="sm:pr-32 flex items-center">
              <DropDown />
              <ThemeSwitcher darkClassName="dark" />
            </div>
          </div>
          {/*End of header---------------------------------------------------*/}
          <div className="left-inside-144">
            <UsesHeader items={itemsArray} />
          </div>
          <div className="left-inside-144 pt-10 pb-14">
            <UsesSection items={items} />
          </div>

          {/*End of big div following Figma*/}
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
