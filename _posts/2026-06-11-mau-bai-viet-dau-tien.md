---
layout: post
title: "Mẫu Bài Viết Markdown Đầu Tiên (Front-matter Example)"
date: 2026-06-11 10:00:00 +0700
excerpt: "Đây là một đoạn tóm tắt ngắn (excerpt) sẽ hiển thị ở trang danh sách bài viết. Nó giúp người đọc biết bài viết nói về điều gì trước khi click vào xem chi tiết."
cover_image: "https://images.unsplash.com/photo-1507238692062-8803bb4b85c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
categories: [Web Design, Jekyll]
tags: [tutorial, update, math, diagram]
---

Chào mừng bạn đến với bài viết đầu tiên được tạo bằng **Markdown**! 
Cấu trúc khai báo ở trên cùng file (nằm giữa hai đường `---`) được gọi là **Front-matter**. Nó chứa các thông tin metadata của bài viết như tiêu đề, ngày tháng, ảnh bìa, danh mục,...

Dưới đây là một số ví dụ về việc sử dụng các tính năng mà ta đã tích hợp vào layout `post.html`.

## 1. Viết Công thức Toán học (MathJax)

Bạn có thể viết công thức Toán học trực tiếp trong văn bản bằng cách bọc nó trong dấu `$`. Ví dụ:
Công thức Einstein $E = mc^2$ sẽ được render inline.

Hoặc nếu bạn muốn một khối công thức riêng biệt, hãy bọc bằng `$$`:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

## 2. Vẽ Biểu đồ với Mermaid.js

Mermaid cho phép bạn tạo các sơ đồ, biểu đồ bằng văn bản thuần. Hãy thử khai báo một khối code markdown với ngôn ngữ là `mermaid`:

```mermaid
graph TD;
    A[Bắt đầu viết Blog] --> B{Sử dụng Jekyll?};
    B -- Có --> C[Cấu trúc gọn gàng, hỗ trợ Markdown];
    B -- Không --> D[Viết HTML thủ công mệt mỏi];
    C --> E[Xây dựng Layout Post];
    E --> F[Tích hợp MathJax & Mermaid];
    F --> G[Hoàn thiện];
```

## 3. Thêm Bình luận Giscus
Kéo xuống dưới cùng của trang này, bạn sẽ thấy một khoảng trống dành riêng cho **Giscus**. Việc bạn cần làm là truy cập trang chủ của Giscus, cấu hình repository GitHub của mình, lấy đoạn thẻ `<script>` và dán đè vào thẻ `<div id="comments">` trong file `_layouts/post.html`.

Chúc bạn viết blog vui vẻ!
