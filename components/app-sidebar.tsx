"use client"

import * as React from "react"
import {
  CalendarCheckIcon,
  ClipboardIcon,
  HouseIcon,
  Syringe,
  User2Icon,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Mateus",
    email: "mateus.zanfulim@gcene.com",
    avatar: "",
  },
  teams: [
    {
      name: "Grupo Cene",
      logo: Syringe,
      plan: "Home Care",
    }
  ],
  navMain: [
    {
      title: "Visita",
      url: "#",
      icon: CalendarCheckIcon,
      isActive: true,
      items: [
        {
          title: "Painel de Visitas",
          url: "/painel-visitation"
        },
        {
          title: "Lista",
          url: "/list-visit"
        },
        {
          title: "Disponibilidade de Profissional",
          url: "/availability-professional"
        },
        {
          title: "Tipos de Visita",
          url: "/type-visit"
        },
        {
          title: "Roteirização",
          url: "/scriptwriting"
        },
      ],
    },
    {
      title: "PAD",
      url: "#",
      icon: HouseIcon,
      items: [
        {
          title: "Criação de PADs",
          url: "/create-pads"
        },
        {
          title: "Painel dos PADs",
          url: "/painel-pads"
        },
        {
          title: "Lista de PADs",
          url: "/list-pads"
        },
        {
          title: "Painel de Prescrições",
          url: "/painel-prescription"
        },
        {
          title: "Itens",
          url: "/itens"
        },
        {
          title: "Procedimentos",
          url: "/procedures"
        },
        {
          title: "Avaliações",
          url: "/evaluation"
        },
        {
          title: "Produtos",
          url: "/product"
        },
        {
          title: "Atendimento",
          url: "/service"
        },
        {
          title: "Prévia de Avaliação",
          url: "/preview-evaluation"
        },
        {
          title: "Vias de Administração",
          url: "/routes-of-administration"
        },
      ],
    },
    {
      title: "Usuários",
      url: "#",
      icon: User2Icon,
      items: [
        {
          title: "Pacientes",
          url: "/patients"
        },
        {
          title: "Profissionais de Saúde",
          url: "/professional"
        },
        {
          title: "Profissões",
          url: "/profession"
        },
        {
          title: "Usuários",
          url: "/users"
        },
        {
          title: "Parceiro de Negócio",
          url: "/business-partners"
        },
        {
          title: "Permissões",
          url: "/permissions"
        },
      ],
    },
    {
      title: "Relatórios",
      url: "#",
      icon: ClipboardIcon,
      items: [
        {
          title: "Configuração",
          url: "/report-configuration"
        },
        {
          title: "Produtividade",
          url: "/productivity"
        },
        {
          title: "Visita",
          url: "/report-visitation"
        },
        {
          title: "Padrões de Saúde",
          url: "/report-health-standards"
        },
        {
          title: "Emissão em Massa",
          url: "report-emission-mass"
        },
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
