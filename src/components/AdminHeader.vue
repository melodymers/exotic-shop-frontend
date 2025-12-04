<template>
  <header class="bg-white border-b border-gray-200">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-1 flex items-center">
          <div class="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              class="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search class="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="text-gray-500 hover:text-gray-700 relative p-2 rounded-lg hover:bg-gray-100"
          >
            <Bell class="h-6 w-6" />
            <span class="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>
          <div class="flex items-center">
            <div
              class="h-8 w-8 rounded-full bg-amber-600 flex items-center justify-center text-white mr-2"
            >
              <User class="h-5 w-5" />
            </div>
            <span class="text-sm font-medium text-gray-700 hidden md:block">Admin User</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Bell, User, Search } from 'lucide-vue-next'
</script>
