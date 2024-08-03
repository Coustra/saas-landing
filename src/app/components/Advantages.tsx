import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FolderArchive, MessageCircle, User2Icon } from "lucide-react";
import React from "react";

export default function Advantages() {
  return (
    <SectionWrapper className='flex md:flex-row md:items-center gap-6 justify-between flex-col my-12'>
      <div className='space-y-2'>
        <div className='text-lg flex flex-row gap-2'>
          <FolderArchive className='text-primary' />
          <h2 className='font-black'>Resources</h2>
        </div>
        <p className='text-sm text-muted-foreground'>
          Add and favorite resources to quickly access essential tools and
          information directly.
        </p>
      </div>
      <div className='space-y-2'>
        <div className='text-lg flex flex-row gap-2'>
          <User2Icon className='text-primary' />
          <h2 className='font-black'>Collaboration</h2>
        </div>
        <p className='text-sm text-muted-foreground'>
          Invite collaborators for access and contributions to project tasks and
          finances.
        </p>
      </div>
      <div className='space-y-2'>
        <div className='text-lg flex flex-row gap-2'>
          <MessageCircle className='text-primary' />
          <h2 className='font-black'>In-app messaging</h2>
        </div>
        <p className='text-sm text-muted-foreground'>
          Send messages, create AI-generated work items, and collaborate
          efficiently.
        </p>
      </div>
    </SectionWrapper>
  );
}
