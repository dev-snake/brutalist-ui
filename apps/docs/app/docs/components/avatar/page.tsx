'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';
import { InstallationTabs } from '@/components/installation-tabs';

export default function AvatarPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black mb-4">Avatar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    An image element with a fallback for representing the user.
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <InstallationTabs componentName="avatar" />
            </section>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage
                                src="https://avatars.githubusercontent.com/u/124599?v=4"
                                alt="User"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?img=47" alt="User" />
                            <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Sizes</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar size="sm">
                            <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <Avatar size="default">
                            <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User" />
                            <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
                            <AvatarFallback>LG</AvatarFallback>
                        </Avatar>
                        <Avatar size="xl">
                            <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="User" />
                            <AvatarFallback>XL</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar size="sm"><AvatarImage src="..." /><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar size="default"><AvatarImage src="..." /><AvatarFallback>MD</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarImage src="..." /><AvatarFallback>LG</AvatarFallback></Avatar>
<Avatar size="xl"><AvatarImage src="..." /><AvatarFallback>XL</AvatarFallback></Avatar>`}</code>
                </pre>
            </section>

            {/* Shape */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Shape</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar shape="square" size="lg">
                            <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <AvatarFallback>SQ</AvatarFallback>
                        </Avatar>
                        <Avatar shape="rounded" size="lg">
                            <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
                            <AvatarFallback>RD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar shape="square"><AvatarImage src="..." /><AvatarFallback>SQ</AvatarFallback></Avatar>
<Avatar shape="rounded"><AvatarImage src="..." /><AvatarFallback>RD</AvatarFallback></Avatar>`}</code>
                </pre>
            </section>

            {/* With Fallback */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Fallback</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    When no image is provided or the image fails to load, the fallback content is
                    displayed. You can customize the fallback with colors and initials.
                </p>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar size="lg">
                            <AvatarFallback className="bg-[#FF6B6B] text-white font-bold">
                                JD
                            </AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarFallback className="bg-[#4ECDC4] text-white font-bold">
                                AB
                            </AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarFallback className="bg-[#FFE66D] text-black font-bold">
                                XY
                            </AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarFallback className="bg-purple-500 text-white font-bold">
                                👤
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`{/* Only fallback - no image */}
<Avatar>
  <AvatarFallback className="bg-[#FF6B6B] text-white font-bold">
    JD
  </AvatarFallback>
</Avatar>

{/* With image that may fail */}
<Avatar>
  <AvatarImage src="/user-avatar.jpg" alt="User" />
  <AvatarFallback className="bg-[#4ECDC4] text-white">AB</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Group */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Avatar Group</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex -space-x-3">
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarImage src="https://i.pravatar.cc/150?img=20" alt="User A" />
                            <AvatarFallback className="bg-[#FF6B6B] text-white">A</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="User B" />
                            <AvatarFallback className="bg-[#4ECDC4] text-white">B</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarImage src="https://i.pravatar.cc/150?img=22" alt="User C" />
                            <AvatarFallback className="bg-[#FFE66D] text-black">C</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarFallback className="bg-gray-500 text-white">+3</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<div className="flex -space-x-3">
  <Avatar className="border-4 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=20" alt="User" />
    <AvatarFallback className="bg-[#FF6B6B] text-white">A</AvatarFallback>
  </Avatar>
  <Avatar className="border-4 border-white">
    <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="User" />
    <AvatarFallback className="bg-[#4ECDC4] text-white">B</AvatarFallback>
  </Avatar>
  {/* ... */}
</div>`}</code>
                </pre>
            </section>
        </div>
    );
}
