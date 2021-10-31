import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, authConfig } from "../constants";

const Sidebar = () => {
  return (
    <div class="menu">
      <div class="menu-header">
        <a href="index.html" class="menu-header-logo">
          <img
            src="https://vetra.laborasyon.com/assets/images/logo.svg"
            alt="logo"
          />
        </a>
        <a href="index.html" class="btn btn-sm menu-close-btn">
          <i class="bi bi-x"></i>
        </a>
      </div>
      <div class="menu-body">
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <div class="avatar me-3">
              <img
                src="../../assets/images/user/man_avatar3.jpg"
                class="rounded-circle"
                alt="image"
              />
            </div>
            <div>
              <div class="fw-bold">{localStorage.getItem("Name")}</div>
            </div>
          </a>
        </div>
        <ul>
          <li class="menu-divider">TODO</li>
          <li></li>
          <li>
            <a href="./Home">
              <span class="nav-link-icon">
                <i class="bi bi-receipt"></i>
              </span>
              <span>Add Task</span>
            </a>
          </li>

          <li>
            <a href="/Home">
              <span class="nav-link-icon">
                <i class="bi bi-person-badge"></i>
              </span>
              <span>Task History</span>
            </a>
          </li>
          <li>
            <a
              className=""
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            >
              <span class="nav-link-icon">
                <i class="bi-box-arrow-right"></i>
              </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
