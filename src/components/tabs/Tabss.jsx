"use client"; 
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function Tabss() {
  return (
    <div className="flex w-full  p-5 flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt libero ea quis aliquam maiores cupiditate quo enim. Voluptatibus reprehenderit nesciunt velit pariatur, ut doloremque quos soluta dicta recusandae quo!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis non illum ullam assumenda aspernatur! Illum officiis quaerat dicta voluptatum, minus sed quis natus? Suscipit commodi, non eligendi obcaecati nostrum tempore.
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, officiis vero sapiente dicta quis aliquid laboriosam magni, dolore quisquam nobis quo natus doloremque modi? Delectus expedita consequuntur minima voluptatem adipisci.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
           
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam, explicabo saepe delectus corporis inventore commodi soluta minus ut quasi magni, aut consequuntur in modi facere. Aspernatur fuga animi ut.
            
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
