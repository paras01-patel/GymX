import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  Package,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Truck,
  QrCode,
  DollarSign,
  X,
  Edit,
  Trash2,
} from "lucide-react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'inventory' | 'orders' | 'members'
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Mock Admin Metrics
  const stats = [
    { title: "Total Revenue", value: "₹4,82,900", change: "+14.2%", isUp: true, icon: DollarSign, color: "text-emerald-400" },
    { title: "Active Gym Members", value: "1,240", change: "+8.5%", isUp: true, icon: Users, color: "text-cyan-400" },
    { title: "Pending Orders", value: "38", change: "-2.1%", isUp: false, icon: Package, color: "text-amber-400" },
    { title: "Low Stock Items", value: "4 Products", change: "Alert", isUp: false, icon: AlertTriangle, color: "text-red-400" },
  ];

  // Mock Products Inventory
  const [products, setProducts] = useState([
    { id: 101, name: "NitroTech Whey Gold (2kg)", category: "Proteins", price: 4999, stock: 45, brand: "MuscleTech", status: "In Stock" },
    { id: 102, name: "Micronized Creatine (250g)", category: "Creatine", price: 1299, stock: 8, brand: "Optimum Nutrition", status: "Low Stock" },
    { id: 103, name: "C4 Explosive Pre-Workout", category: "Pre-Workout", price: 2499, stock: 22, brand: "Cellucor", status: "In Stock" },
    { id: 104, name: "Heavy Duty Leather Belt", category: "Gear", price: 1899, stock: 0, brand: "Beast Gear", status: "Out of Stock" },
  ]);

  // Mock Customer Orders
  const [orders, setOrders] = useState([
    { id: "GX-98421", customer: "Alex Mercer", item: "Whey Protein + Creatine", amount: 6198, date: "25 Sep 2026", status: "In Transit" },
    { id: "GX-98422", customer: "Rohan Sharma", item: "C4 Pre-Workout", amount: 2499, date: "26 Sep 2026", status: "Packed" },
    { id: "GX-98423", customer: "Priya Patel", item: "Pro Beast Membership (1 Yr)", amount: 14999, date: "26 Sep 2026", status: "Delivered" },
  ]);

  // Mock Gym Members
  const members = [
    { id: "GX-M01", name: "Alex Mercer", plan: "PRO BEAST TIER", expiry: "24 Oct 2026", qrStatus: "Active" },
    { id: "GX-M02", name: "Ankit Verma", plan: "GYM FLOOR PASS", expiry: "12 Nov 2026", qrStatus: "Active" },
    { id: "GX-M03", name: "Neha Singh", plan: "VIP ALL ACCESS", expiry: "02 Oct 2026", qrStatus: "Expiring Soon" },
  ];

  // Handler for Order Status Change
  const handleOrderStatusChange = (orderId, newStatus) => {
    setOrders(orders.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord)));
  };

  // Handler for Product Stock Toggle
  const toggleStockStatus = (productId) => {
    setProducts(
      products.map((p) => {
        if (p.id === productId) {
          const newStock = p.stock === 0 ? 25 : 0;
          return {
            ...p,
            stock: newStock,
            status: newStock === 0 ? "Out of Stock" : newStock < 10 ? "Low Stock" : "In Stock",
          };
        }
        return p;
      })
    );
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">ADMIN PORTAL</span>
            <h1 className="text-3xl font-black text-white uppercase tracking-tight">Gym & Store Dashboard</h1>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" /> Add New Supplement / Gear
          </button>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</span>
                  <div className={`p-2 bg-slate-950 rounded-xl border border-slate-800 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-white">{item.value}</div>
                <span className={`text-[11px] font-bold mt-1 inline-block ${item.isUp ? "text-emerald-400" : "text-amber-400"}`}>
                  {item.change} <span className="text-slate-500 font-normal">vs last month</span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-slate-800/80 pb-3 overflow-x-auto">
          {[
            { id: "overview", label: "Overview & Analytics" },
            { id: "inventory", label: "Supplements Inventory" },
            { id: "orders", label: "Customer Orders" },
            { id: "members", label: "Gym Memberships" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: INVENTORY MANAGEMENT */}
        {(activeTab === "inventory" || activeTab === "overview") && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Package className="w-5 h-5 text-cyan-400" /> Products & Supplements Catalog
              </h2>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search item..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Product Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Quick Stock Toggle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {products
                    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((item) => (
                      <tr key={item.id} className="hover:bg-slate-950/50 transition">
                        <td className="py-3.5 px-4 font-mono text-slate-400">#{item.id}</td>
                        <td className="py-3.5 px-4 font-bold text-white">{item.name}</td>
                        <td className="py-3.5 px-4 text-slate-400">{item.category}</td>
                        <td className="py-3.5 px-4 font-bold text-cyan-400">₹{item.price}</td>
                        <td className="py-3.5 px-4 font-mono">{item.stock} Units</td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              item.status === "In Stock"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                : item.status === "Low Stock"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                : "bg-red-500/10 text-red-400 border border-red-500/30"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => toggleStockStatus(item.id)}
                            className="px-3 py-1 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-lg text-[10px] font-bold uppercase text-slate-300 transition"
                          >
                            {item.stock === 0 ? "Restock (25)" : "Mark Out of Stock"}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: ORDER MANAGEMENT */}
        {(activeTab === "orders" || activeTab === "overview") && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 mb-8">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-400" /> Customer Orders & Status Dispatch
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items Included</th>
                    <th className="py-3 px-4">Total Amount</th>
                    <th className="py-3 px-4">Order Date</th>
                    <th className="py-3 px-4">Update Live Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-950/50 transition">
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">{ord.id}</td>
                      <td className="py-3.5 px-4 font-bold text-white">{ord.customer}</td>
                      <td className="py-3.5 px-4 text-slate-300">{ord.item}</td>
                      <td className="py-3.5 px-4 font-bold text-white">₹{ord.amount}</td>
                      <td className="py-3.5 px-4 text-slate-400">{ord.date}</td>
                      <td className="py-3.5 px-4">
                        <select
                          value={ord.status}
                          onChange={(e) => handleOrderStatusChange(ord.id, e.target.value)}
                          className="bg-slate-950 border border-slate-800 text-xs text-white px-3 py-1.5 rounded-xl focus:outline-none focus:border-cyan-500 font-bold"
                        >
                          <option value="Placed">Placed</option>
                          <option value="Packed">Packed</option>
                          <option value="In Transit">In Transit</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: GYM MEMBERSHIPS */}
        {activeTab === "members" && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <QrCode className="w-5 h-5 text-cyan-400" /> Active Gym Members & QR Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {members.map((m) => (
                <div key={m.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400">{m.id}</span>
                      <h3 className="font-bold text-white text-sm">{m.name}</h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
                      {m.qrStatus}
                    </span>
                  </div>

                  <div className="text-xs space-y-1 text-slate-400 pt-2 border-t border-slate-800">
                    <p>Plan: <span className="text-white font-bold">{m.plan}</span></p>
                    <p>Expiry Date: <span className="text-amber-400 font-bold">{m.expiry}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ADD PRODUCT MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 relative shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-black text-white uppercase text-sm">Add New Gym Product</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAddModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gold Standard BCAA"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Category</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-cyan-500">
                    <option>Proteins</option>
                    <option>Creatine</option>
                    <option>Pre-Workout</option>
                    <option>Gear</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="2999"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Initial Stock Count</label>
                <input
                  type="number"
                  required
                  placeholder="50"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase rounded-xl transition shadow-lg shadow-cyan-500/20 mt-2"
              >
                Publish To Store
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}