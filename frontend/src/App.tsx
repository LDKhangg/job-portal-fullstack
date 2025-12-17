import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function App() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navbar đơn giản */}
            <nav className="border-b bg-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-slate-900">DevJob Portal</h1>
                <div className="space-x-4">
                    <Button variant="ghost">Tìm việc</Button>
                    <Button variant="outline">Đăng nhập</Button>
                    <Button>Cho Nhà tuyển dụng</Button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto p-8">
                <header className="mb-8">
                    <h2 className="text-3xl font-extrabold tracking-tight">Việc làm IT mới nhất</h2>
                    <p className="text-slate-500">Khám phá cơ hội nghề nghiệp tiếp theo của bạn.</p>
                </header>

                {/* Danh sách Job (Ví dụ) */}
                <div className="grid gap-4">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="hover:border-blue-400 transition-colors cursor-pointer">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Senior Java Engineer</CardTitle>
                                    <CardDescription>Công ty Công nghệ ABC • Quận 1, TP.HCM</CardDescription>
                                </div>
                                <Badge variant="secondary">$2000 - $3500</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2">
                                    <Badge>Spring Boot</Badge>
                                    <Badge>Microservices</Badge>
                                    <Badge>AWS</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}