---
layout: post
title: A Low-Cost Modular 3D-Printed Proprioceptive Actuator for HRI
date: 2025-03-12 12:00:00
description: 10:1 ratio Reducer, BLDC Motor, FOC Controller and Proprioceptive Sense
tags: QDD-Actuator
categories: project
thumbnail: assets/img/actuator-v1/thumbnail.png
giscus_comments: true
related_posts: true
images:
  slider: true
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

[view this page in github with resources](https://github.com/JeongSeoJin/robotic-actuators)

## Background: Motivation and Evolution
In my previous project, 'Modular Cycloidal Actuator-based 4DoF Cooperative Robotic Arm', featuring **27:1 gear ratio**, **fully 3D-printed cycloidal reducer** and **precise position control using nama17 stepper motor with a4988 motor driver**. However, the lack of back-drivability of the actuators and torque-based control make my robotic arm significantly stiff, restricting Human-Robot Interaction(HRI). 

<div class="row row-cols-2 row-cols-md-3 g-1">
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img1.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img2.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img3.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img4.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img5.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/4dof-robotic-arm/img6.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

To address this issue, I developed 'A Low-Cost 3D-Printed Proprioceptive Actuator', utilizing **bldc drone motors**, **FOC controller** for precise torque/position control and **proprioceptive sensing** of current of motor. And I designed **Quasi-Direct Drive(QDD) reducer**(low gear ratio reducer) and **Impedance Control** demonstrating high dynmaics, agility and compliance properties for HRI.

---

## BLDC Motor
BLDC Motor Brushless DC (BLDC) motors are highly suitable for dynamic and agile robotic actuators due to their exceptional torque density, high velocity and acceleration, back-drivability, and proprioceptive sensing capabilities.

A BLDC Motor is composed of two main parts: the stator and the rotor. the stator produce a rotating electromagnetic field via a motor controller(ESC), and the rotor(permanent magnet) follows this field to produce rotation without any brushes like standard DC Motor.

This brushless design eliminates mechanical friction from brushes, leading to higher efficiency, longer lifespan and most importantly, the ability to estimate torque through current sensing—a key feature for proprioceptive control in legged robots.

{% include figure.liquid 
  loading="eager" 
  path="assets/img/4dof-robotic-arm/image.png" 
  class="img-fluid rounded z-depth-1" 
  caption="Source: <a href='https://etonmmotor.com/outrunner-vs-inrunner-choosing-the-right-brushless-dc-motor/'>Etonm Motor</a>" 
%}

I optend for an **Outrunner BLDC Motor** because a larger air-gap radius allows the motor to produce higher torque. Since the air-gap radius is directly correlates with torque density. Thus this design is ideal for high-performance actuators. For more technical detials, please refer to my other post: [Paper Review: 'Design Principles for Energy Efficient Legged Locomotion and Implementation on the MIT Cheetah Robot']({% post_url 2025-12-26-review01 %})."

## Reducer
I was inspired by **Mishin Machine**-[**Wave Drive with Rolling Elements**](https://www.youtube.com/watch?v=zOLQw-TxE7s) which is cycloidal-like reducer using ball-elements sharing as an open-source in Onshape. It's compact, simplfied with a few components and robust.

{% include figure.liquid 
  loading="eager" 
  path="assets/img/4dof-robotic-arm/image2.png" 
  class="img-fluid rounded z-depth-1" 
  caption="Source: <a href='https://www.youtube.com/watch?v=zOLQw-TxE7s'>Mishin Machine</a>" 
%}

## FOC Controller
I used FOC Controller, 'drv8302 motor driver' to control the BLDC Motor. Unlike standard Electric Speed Controller(ESC), FOC Controller enables position/torque control etc. 

{% include figure.liquid 
  loading="eager" 
  path="assets/img/4dof-robotic-arm/image3.png" 
  class="img-fluid rounded z-depth-1" 
  caption="Source: <a href='https://www.youtube.com/watch?v=AmS22zwl2EA'>SIROJU</a>" 
%}


## CAN BUS Communication
I used TJA1051T to enable CAN BUS Communication which enables communicate between other controllers(MCU). This is essential for using multiple actuators system like locomotive & manipulator systems.

## BOM & resources of Actuators 3types(Basic, Lite, Enhenced)

### 1. QDD Actautor Basic
---

{% include figure.liquid loading="eager" path="assets/img/actuator-v3/image.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid loading="eager" path="assets/img/actuator-v3/image1.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}

#### BOM of QDD Actuator Basic

<div class="table-responsive">
  <table class="table table-sm table-hover table-bordered">
    <thead class="thead-light">
      <tr>
        <th style="width: 15%;">Category</th>
        <th style="width: 20%;">Component</th>
        <th style="width: 45%;">Specification</th>
        <th style="width: 10%; text-align: center;">Qty</th>
        <th style="width: 10%; text-align: center;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="vertical-align: middle;"><b>Motor & Drive</b></td>
        <td>BLDC Motor</td>
        <td>Sunnysky x4108s-17</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/33057877767.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Motor Driver</td>
        <td>DRV8302</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/4000126430773.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="3" style="vertical-align: middle;"><b>Electronics</b></td>
        <td>Microcontroller</td>
        <td>ESP-WROOM-32</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005007050459447.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Magnetic Encoder</td>
        <td>AS5600</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005006502384626.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>CAN Transceiver</td>
        <td>TJA1051T</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005007053249619.html" target="_blank">View</a></td>
      </tr
      <tr>
        <td rowspan="4" style="vertical-align: middle;"><b>Mechanical</b></td>
        <td>Gearbox</td>
        <td>3D Printed Parts</td>
        <td style="text-align: center;">1 set</td>
        <td style="text-align: center;">-</td>
      </tr>
      <tr>
        <td>Ball Elements</td>
        <td>M6 x 6mm</td>
        <td style="text-align: center;">10</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005003729421711.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bearings</td>
        <td>20 x 27 x 4 mm</td>
        <td style="text-align: center;">3</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005006822777675.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bearings</td>
        <td>45 x 55 x 6 mm</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/4000909605390.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="6" style="vertical-align: middle;"><b>Fasteners</b></td>
        <td>Bolts</td>
        <td>M3 x 30 mm</td>
        <td style="text-align: center;">4</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bolts</td>
        <td>M3 x 20 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bolts</td>
        <td>M2 x 10 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M2 x 3 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M3 x 3 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M3 x 6 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
    </tbody>
  </table>
</div>


---

### 2. Cycloidal QDD Actuator Lite
---

{% include figure.liquid loading="eager" path="assets/img/actuator-v1/image-1.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}

<div class="row row-cols-2 row-cols-md-3 g-1 mb-3">
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img1.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img2.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img3.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img4.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img5.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img7.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img8.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/img6.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/actuator-v1/image.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}
  </div>
</div>


#### BOM of QDD Actuator Lite

<div class="table-responsive">
  <table class="table table-sm table-hover table-bordered">
    <thead class="thead-light">
      <tr>
        <th style="width: 15%;">Category</th>
        <th style="width: 20%;">Component</th>
        <th style="width: 45%;">Specification</th>
        <th style="width: 10%; text-align: center;">Qty</th>
        <th style="width: 10%; text-align: center;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="vertical-align: middle;"><b>Motor & Drive</b></td>
        <td>BLDC Motor</td>
        <td>5010 BLDC Motor</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/32479766898.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Motor Driver</td>
        <td>SimpleFOC Shield v2</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://simplefoc.com/simplefoc_shield_product" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="3" style="vertical-align: middle;"><b>Electronics</b></td>
        <td>Microcontroller</td>
        <td>Arduino Uno</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;">-</td>
      </tr>
      <tr>
        <td>Magnetic Encoder</td>
        <td>AS5600</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005006502384626.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>CAN Bus</td>
        <td>None</td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center;">-</td>
      </tr>
      <tr>
        <td style="vertical-align: middle;"><b>Mechanical</b></td>
        <td>Gearbox</td>
        <td>3D Printed Gearbox</td>
        <td style="text-align: center;">1 set</td>
        <td style="text-align: center;">-</td>
      </tr>
    </tbody>
  </table>
</div>


---

### 3. QDD Actuator Enhenced
---

{% include figure.liquid loading="eager" path="assets/img/actuator-v2/image-1.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid loading="eager" path="assets/img/actuator-v2/image.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid loading="eager" path="assets/img/actuator-v2/image-2.png" width="100%" max-width="600px" alt="Actuator image 2" class="img-fluid rounded z-depth-1" %}

#### BOM of QDD Actuator Enhenced
<div class="table-responsive">
  <table class="table table-sm table-hover table-bordered">
    <thead class="thead-light">
      <tr>
        <th style="width: 15%;">Category</th>
        <th style="width: 20%;">Component</th>
        <th style="width: 45%;">Specification</th>
        <th style="width: 10%; text-align: center;">Qty</th>
        <th style="width: 10%; text-align: center;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="vertical-align: middle;"><b>Motor & Drive</b></td>
        <td>BLDC Motor</td>
        <td>Gartt ML5210</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/4001297326582.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Motor Driver</td>
        <td>DRV8302</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/4000126430773.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="3" style="vertical-align: middle;"><b>Electronics</b></td>
        <td>Microcontroller</td>
        <td>ESP-WROOM-32</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005007050459447.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Magnetic Encoder</td>
        <td>AS5600</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005006502384626.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>CAN Transceiver</td>
        <td>TJA1051T</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005007053249619.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="4" style="vertical-align: middle;"><b>Mechanical</b></td>
        <td>Gearbox</td>
        <td>3D Printed Parts</td>
        <td style="text-align: center;">1 set</td>
        <td style="text-align: center;">-</td>
      </tr>
      <tr>
        <td>Ball Elements</td>
        <td>M6 x 6mm</td>
        <td style="text-align: center;">10</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005003729421711.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bearings</td>
        <td>20 x 27 x 4 mm</td>
        <td style="text-align: center;">3</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005006822777675.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bearings</td>
        <td>45 x 55 x 6 mm</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/4000909605390.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td rowspan="6" style="vertical-align: middle;"><b>Fasteners</b></td>
        <td>Bolts</td>
        <td>M3 x 30 mm</td>
        <td style="text-align: center;">4</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bolts</td>
        <td>M3 x 20 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Bolts</td>
        <td>M2 x 10 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005005879037174.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M2 x 3 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M3 x 3 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
      <tr>
        <td>Insert Nuts</td>
        <td>M3 x 6 mm</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;"><a href="https://ko.aliexpress.com/item/1005004870993068.html" target="_blank">View</a></td>
      </tr>
    </tbody>
  </table>
</div>

you can see more specific code at [simplefoc documents](https://docs.simplefoc.com/code)
