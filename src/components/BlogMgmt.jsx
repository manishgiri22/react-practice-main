
import { useState } from "react";

export default function BlogMgmt() {
  // Blog data
  const [blogs, setBlogs] = useState([]);

  // Form data
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Clear form
  const resetForm = () => {
    setForm({
      title: "",
      author: "",
      category: "",
      content: "",
      date: new Date().toISOString().slice(0, 10),
    });
    setEditId(null);
    setMessage("");
  };

  // Create and Update blog
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((value) => !value.trim())) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (editId) {
      setBlogs(
        blogs.map((item) =>
          item.id === editId ? { ...form, id: editId } : item
        )
      );
    } else {
      setBlogs([...blogs, { ...form, id: Date.now() }]);
    }

    resetForm();
  };

  // Load blog data into form for editing
  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      author: blog.author,
      category: blog.category,
      content: blog.content,
      date: blog.date,
    });
    setEditId(blog.id);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete blog
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      if (editId === id) resetForm();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-700">
            My Blog Manager
          </h1>
          <p className="mt-2 text-gray-500">
            Create, manage and organize your blog posts.
          </p>
        </header>

        {/* Blog Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-10 rounded-2xl bg-white p-6 shadow-lg"
        >
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            {editId ? "Edit Blog" : "Create New Blog"}
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Title */}
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Blog Title"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            {/* Author */}
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author Name"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            {/* Category */}
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="rounded-lg border bg-white p-3 outline-none focus:border-indigo-500"
            >
              <option value="">Select Category</option>
              {["Technology", "Education", "Lifestyle", "Travel", "Other"].map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </select>

            {/* Publish Date */}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            {/* Content */}
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Write your blog content..."
              rows="4"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500 md:col-span-2"
            />
          </div>

          {/* Validation Message */}
          {message && (
            <p className="mt-3 text-sm text-red-500">{message}</p>
          )}

          {/* Form Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
            >
              {editId ? "Update Blog" : "Add Blog"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg bg-gray-200 px-6 py-3 hover:bg-gray-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Blog List */}
        <div>
          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            Published Blogs ({blogs.length})
          </h2>

          {blogs.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow">
              No blogs available. Create your first blog!
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">

              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl"
                >
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                    {blog.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-gray-800">
                    {blog.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    By {blog.author} · {blog.date}
                  </p>

                  <p className="mt-4 whitespace-pre-wrap break-words text-gray-600">
                    {blog.content}
                  </p>

                  {/* Edit and Delete */}
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
