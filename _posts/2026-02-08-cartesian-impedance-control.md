---
layout: post
title: "[Part1] Beyond Position Control: The Philosophy of Interaction"
date: 2026-02-08 10:14:00
description: Cartesian-Space Impedance Control for compliance
tags: Impedance-Control PD-Control Dynamics
categories: project
thumbnail: assets/img/impedance-control/image.png
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---


<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    }
  });
</script>

> **Subtitle:** Why Cartesian Impedance Control is the key to safe Human-Robot Interaction (HRI).

## 1. Background: Motivation and Evolution

Historically, industrial robotics prioritized **absolute accuracy**. The primary objective was to track a target joint configuration $q_d$ with zero error, effectively modeling the robot as an infinitely stiff system.

However, as robots are increasingly integrated into human environments, the paradigm has shifted. Interactions between robots, humans, and unstructured environments are now **inevitable**. A traditional "stiff" robot cannot safely interact with humans or handle contact with uncertain surroundings. If a position-controlled robot collides with a rigid wall, it attempts to push through it with high torque, leading to critical damage. More importantly, if the obstacle were a human, this rigid behavior could result in severe injury. **This necessitates a compliant and safe control strategy.**

Recently, the surge of **Humanoid** and **Quadruped robots** highlights the importance of safe Human-Robot Interaction (HRI) and dynamic locomotion. These systems, required to physically interact with the world, employ **Torque-based PD controllers** or **Impedance Control**. This ensures compliance against external disturbances, which is key for both safety in HRI and stability when walking on uneven terrains.

In this article, I will delve into **PD Control**, **Cartesian Impedance Control**, and **Trajectory Generation**, with a strong focus on **Robot Dynamics**. I will also validate why these concepts are crucial for modern HRI and locomotive systems.

* **Evolution:** Position Control $\rightarrow$ **Impedance/Interaction Control**
* **Key Insight:** We are no longer controlling the *position* alone; we are controlling the **dynamic behavior** of the interaction between the robot and its environment.
* **Key Words:** Human-Robot Interaction(HRI), Compliance, Safety, PD Control, Impedance Control, Trajectory Generation and Robot Dynamics

---
## 2. Introduction: How do we make robot behavior flexible? & What is Impedance Control?

According to **Neville Hogan (1985)**, impedance control imposes a dynamic relationship between the manipulator motion and the external interaction forces.

Instead of commanding the robot to "go to point A" regardless of the environment, we command it to **"behave like a virtual spring-damper system."** **This is the key of compliant interactions**.

* **Causality:** Motion (Input) $\rightarrow$ Force (Output).
* **Physical Intuition:** The robot acts as if it is attached to a virtual equilibrium point via a mechanical spring and damper.

### Why do we use it?
1.  **Safety:** Upon collision, the robot compliantly deviates from its path, reducing the impact force and preventing damage to both the environment and itself.
2.  **Contact Stability:** Unlike position control, which becomes unstable during hard contact (due to integral wind-up or high gains), impedance control maintains stability by regulating the contact force through stiffness. This is essential for **humanoid and quadruped robots** walking on unpredictable terrains.
3.  **Uncertainty Handling:** It allows the robot to perform tasks like "peg-in-hole" insertion without knowing the exact hole location, purely by leveraging mechanical compliance.

---

## 3. The Foundation: Joint-Space Impedance Control

Before diving into complex task-space behaviors, we must understand the most fundamental form: **Joint-Space Impedance Control**.

In this scheme, each joint is treated as if it has a torsional spring and damper attached to it. However, there is a gap between theory and practice.

### Theoretical Joint-Space Impedance Control

In an ideal world, we want to shape the full dynamic behavior including inertia:

$$\tau = M_d (\ddot{q}_d - \ddot{q}) + D_d (\dot{q}_d - \dot{q}) + K_d (q_d - q) + \hat{g}(q)$$

* $\tau$: Joint torque command
* $M_d, D_d, K_d$: Desired Inertia, Damping, and Stiffness matrices
* $\hat{g}(q)$: Gravity Compensation term

### Joint-Space Impedance Control in the Real World

In practice, shaping the inertia ($M_d$) is challenging. Measuring angular acceleration ($\ddot{q}$) requires double differentiation of the encoder signal, which drastically **amplifies high-frequency sensor noise**.
Therefore, practical impedance controllers often drop the inertial term and rely on a **PD-type law with gravity compensation**:

$$\tau = K_d (q_d - q) + D_d (\dot{q}_d - \dot{q}) + \hat{g}(q)$$

* **Why PD and not PID?** We intentionally exclude the Integral (I) term. During physical interaction, an I-term would accumulate error (Integral Wind-up), causing the robot to exert excessive force and overshoot when contact is broken, which is dangerous for HRI.
* "Many people confuse Impedance Control with simple PD control. While **mathematical formulations are identical**, the design philosophy **differs**. **PD control aims for infinite stiffness** to reject disturbances, whereas **Impedance Control aims for finite**, designed stiffness to accommodate interactions."

### Pros & Cons of Joint-Space Impedance Control
* **Pros:** Computationally efficient and robust. It works exceptionally well for **locomotion**, where joint compliance naturally absorbs ground impact shocks without complex force sensing.
* **Cons:** It lacks intuition in the Cartesian world.
  * **Problem:** Setting high stiffness on Joint 1 ($q_1$) does not guarantee stiffness in the Z-direction of the end-effector. The relationship is highly nonlinear and configuration-dependent.

---

## 4. From Joint Space to Task Space: The Necessity of Cartesian Impedance

**"Tasks are defined in coordinates, not in angles."**

While Joint-Space control is effective for internal stability, it fundamentally disconnects from the geometric nature of real-world interaction. Consider a surface polishing task: the robot must be **stiff** in the vertical direction (Z-axis) to apply pressure, yet **compliant** in the horizontal plane (X-Y axes) to glide smoothly.

Achieving this "Directional Stiffness" using purely Joint-Space Impedance is mathematically non-trivial. Since the relationship between joint angles and end-effector position is nonlinear, a diagonal joint stiffness matrix ($K_q$) results in a coupled, non-diagonal stiffness behavior at the end-effector. In other words, we cannot independently decompose the interaction forces into orthogonal Cartesian vectors.

To address this, we employ **Cartesian Impedance Control**. This method allows us to define the desired dynamic behavior directly in the Task Space and project it down to the Joint Space using the **Jacobian Transpose**.

### Cartesian-Space Impedance Formulation

Instead of defining stiffness at the joints, we define a virtual spring-damper system at the end-effector:

$$F_{task} = K_x (x_d - x) + D_x (\dot{x}_d - \dot{x})$$

Where $K_x$ and $D_x$ are diagonal matrices representing stiffness and damping in the Cartesian axes.

To realize this force physically, we map the task-space force ($F_{task}$) to joint torques ($\tau$) using the relationship derived from the Principle of Virtual Work ($\tau = J^T F$):

$$\tau_{cmd} = J^T(q) F_{task} + g(q)$$

Substituting the impedance law:

$$\tau_{cmd} = J^T(q) \left( K_x (x_d - x) + D_x (\dot{x}_d - \dot{x}) \right) + g(q)$$

By utilizing the **Jacobian Transpose ($J^T$)**, we can intuitively design the robot's interaction properties in the X, Y, and Z directions independently. This "Stiffness Decoupling" is the standard requirement for advanced manipulation tasks.

---

*(Note: In the next article, **"Part 2: Planning for Interaction,"** we will discuss Trajectory Generation strategies to move the virtual equilibrium point ($x_d$) smoothly, ensuring stable contact transitions.)*

> *"We are not just building robots that move; we are building robots that feel."*

