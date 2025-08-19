import fs from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, GitCommit, Clock, Tag } from "lucide-react";
import Image from "next/image";

type ChangelogEntry = {
    version: string;
    date: string;
    changes: string[];
};

/**
 * Fetches changelog data from public/changelog.json
 */
async function getChangelog(): Promise<ChangelogEntry[]> {
    const filePath = path.join(process.cwd(), "public", "changelog.json");
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

/**
 * Enhanced Changelog Page with Modern UI
 */
export default async function ChangelogPage() {
    const changelog = await getChangelog();

    const getVersionBadgeVariant = (version: string) => {
        if (version.includes("major") || version.match(/^\d+\.0\.0$/)) return "default";
        if (version.includes("beta") || version.includes("alpha")) return "secondary";
        return "outline";
    };

    const formatRelativeTime = (date: string) => {
        const now = new Date();
        const changeDate = new Date(date);
        const diffTime = Math.abs(now.getTime() - changeDate.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Header Section */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-10">
                <div className="px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/SSC_Label.png" alt="SSC LOGO" width={256} height={124} />
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                                <GitCommit className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    Changelog
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Track all updates and improvements
                                </p>
                            </div>
                        </div>
                        <div>
                            <span>Powered by:</span>
                            <Image src="/CORSW_BG_LIGHT_64x64.png" alt="Corner Softwares logo" width={64} height={64} />
                        </div>
                        <Badge variant="secondary" className="gap-1">
                            <Clock className="w-3 h-3" />
                            {changelog.length} releases
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <ScrollArea>
                    <div className="space-y-8">
                        {changelog.map((entry, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Timeline Line */}
                                {index !== changelog.length - 1 && (
                                    <div className="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-700 z-0" />
                                )}

                                <Card className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-800/20 transition-all duration-500">
                                    <CardHeader className="relative pb-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                {/* Version Icon */}
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                                                    <Tag className="w-6 h-6" />
                                                </div>

                                                <div>
                                                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                                                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                                            Version {entry.version}
                                                        </span>
                                                        <Badge
                                                            variant={getVersionBadgeVariant(entry.version)}
                                                            className="ml-2"
                                                        >
                                                            {entry.version.includes("beta") ? "BETA" :
                                                                entry.version.includes("alpha") ? "ALPHA" :
                                                                    entry.version.match(/^\d+\.0\.0$/) ? "MAJOR" : "RELEASE"}
                                                        </Badge>
                                                    </CardTitle>
                                                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {new Date(entry.date).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                        <div className="w-1 h-1 bg-slate-400 rounded-full" />
                                                        <span>{formatRelativeTime(entry.date)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Badge variant="outline" className="shrink-0">
                                                {entry.changes.length} {entry.changes.length === 1 ? 'change' : 'changes'}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="relative pt-0">
                                        <Separator className="mb-6 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

                                        <div className="space-y-3">
                                            {entry.changes.map((change, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors group/item"
                                                >
                                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                        {change}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* End Message */}
                    <div className="text-center py-12">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <GitCommit className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            You&apos;ve reached the beginning of our changelog journey
                        </p>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}